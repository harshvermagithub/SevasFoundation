import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Simulation of a basic JSON-based content store
const dbPath = path.join(process.cwd(), 'public', 'admin_db.json');

// Initialize DB if not exists
if (!fs.existsSync(dbPath)) {
  const initialData = {
    gallery: [
       "WhatsApp Image 2026-03-14 at 14.38.20 (1).jpeg",
       "WhatsApp Image 2026-03-14 at 14.38.21 (1).jpeg",
       "WhatsApp Image 2026-03-14 at 14.38.22 (1).jpeg",
       "WhatsApp Image 2026-03-14 at 14.38.23 (1).jpeg",
       "WhatsApp Image 2026-03-14 at 14.38.24 (1).jpeg",
       "WhatsApp Image 2026-03-14 at 14.38.25 (1).jpeg"
    ],
    videos: [
      "WhatsApp Video 2026-03-14 at 14.37.05.mp4",
      "WhatsApp Video 2026-03-14 at 14.37.53.mp4",
      "WhatsApp Video 2026-03-14 at 17.36.10.mp4",
      "WhatsApp Video 2026-03-14 at 21.29.01.mp4"
    ],
    events: [
      {
        id: "1",
        title: "Free Artificial Limb Distribution Camp - Rural Bangalore",
        date: "2026-10-15",
        location: "Bangalore Rural District Camp",
        description: "We will be hosting a massive free limb measurement and distribution camp for over 500 pre-registered individuals."
      },
      {
        id: "2",
        title: "Prosthetics Awareness Seminar",
        date: "2026-11-02",
        location: "Jayanagar Medical Assembly Hall",
        description: "A comprehensive seminar led by top orthotics aiming to educate families and practitioners."
      }
    ]
  };
  fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
}

export async function GET() {
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  if (body.type === 'gallery') {
    data.gallery.push(body.image);
  } else if (body.type === 'video') {
    data.videos.push(body.video);
  } else if (body.type === 'event') {
    const newEvent = { ...body.event, id: Date.now().toString() };
    data.events.push(newEvent);
  } else if (body.type === 'delete_event') {
    data.events = data.events.filter((e: any) => e.id !== body.id);
  } else if (body.type === 'delete_gallery') {
    data.gallery = data.gallery.filter((img: string) => img !== body.image);
  }

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  return NextResponse.json({ success: true, data });
}
