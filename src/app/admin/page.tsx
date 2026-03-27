"use client";
import React, { useState, useEffect } from 'react';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('admin123');
  const [activeMenu, setActiveMenu] = useState('gallery');
  const [db, setDb] = useState<{ gallery: string[], videos: string[], events: any[] }>({ gallery: [], videos: [], events: [] });

  useEffect(() => {
    fetch('/api/admin')
      .then(res => res.json())
      .then(data => setDb(data));
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === currentPassword) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid Password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword('');
  };

  const handleAddData = async (type: string, payload: any) => {
    const res = await fetch('/api/admin', {
      method: 'POST',
      body: JSON.stringify({ type, ...payload }),
      headers: { 'Content-Type': 'application/json' }
    });
    const result = await res.json();
    setDb(result.data);
  };

  if (!isLoggedIn) {
    return (
      <div className="page-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <div className="glass" style={{ padding: '3rem', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem' }}>Admin <span className="glowing-text">Login</span></h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="password" 
              placeholder="Enter Admin Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)' }}
            />
            <button type="submit" className="btn-primary">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content" style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <h1 className="section-title">Admin <span className="glowing-text">Dashboard</span></h1>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          {/* Sidebar */}
          <div className="glass" style={{ width: '250px', padding: '1.5rem', height: 'fit-content' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button 
                onClick={() => setActiveMenu('gallery')} 
                className={activeMenu === 'gallery' ? 'btn-primary' : 'btn-outline'}
                style={{ textAlign: 'left', border: activeMenu === 'gallery' ? 'none' : '1px solid var(--glass-border)' }}
              >
                🖼️ Gallery Manager
              </button>
              <button 
                onClick={() => setActiveMenu('videos')} 
                className={activeMenu === 'videos' ? 'btn-primary' : 'btn-outline'}
                style={{ textAlign: 'left', border: activeMenu === 'videos' ? 'none' : '1px solid var(--glass-border)' }}
              >
                🎥 Video Manager
              </button>
              <button 
                onClick={() => setActiveMenu('events')} 
                className={activeMenu === 'events' ? 'btn-primary' : 'btn-outline'}
                style={{ textAlign: 'left', border: activeMenu === 'events' ? 'none' : '1px solid var(--glass-border)' }}
              >
                📅 Events Manager
              </button>
              <button 
                onClick={() => setActiveMenu('settings')} 
                className={activeMenu === 'settings' ? 'btn-primary' : 'btn-outline'}
                style={{ textAlign: 'left', border: activeMenu === 'settings' ? 'none' : '1px solid var(--glass-border)' }}
              >
                ⚙️ Admin Settings
              </button>
              <hr style={{ margin: '1rem 0', opacity: 0.2 }} />
              <button onClick={handleLogout} className="btn-outline" style={{ color: 'red', borderColor: 'rgba(255,0,0,0.2)' }}>
                Logout
              </button>
            </nav>
          </div>

          {/* Main Area */}
          <div className="glass" style={{ flex: 1, padding: '2rem' }}>
            {activeMenu === 'gallery' && <GalleryManager images={db.gallery} onAdd={(img) => handleAddData('gallery', { image: img })} onDelete={(img) => handleAddData('delete_gallery', { image: img })} />}
            {activeMenu === 'videos' && <VideoManager videos={db.videos} onAdd={(vid) => handleAddData('video', { video: vid })} />}
            {activeMenu === 'events' && <EventsManager events={db.events} onAdd={(ev) => handleAddData('event', { event: ev })} onDelete={(id) => handleAddData('delete_event', { id })} />}
            {activeMenu === 'settings' && <SettingsManager currentPassword={currentPassword} onPasswordUpdate={setCurrentPassword} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryManager({ images, onAdd, onDelete }: { images: string[], onAdd: (img: string) => void, onDelete: (img: string) => void }) {
  const [newImg, setNewImg] = useState('');
  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Images Gallery</h2>
      <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '2px dashed var(--glass-border)', borderRadius: '12px' }}>
        <input 
          placeholder="Image File Name (e.g., logo.png or Client-Photo.jpeg)" 
          value={newImg}
          onChange={(e) => setNewImg(e.target.value)}
          style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)', marginBottom: '1rem' }}
        />
        <button onClick={() => { onAdd(newImg); setNewImg(''); }} className="btn-primary">Add to Front-End Gallery</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '1rem' }}>
        {images.map((img, idx) => (
          <div key={`admin-img-${img}-${idx}`} style={{ position: 'relative' }}>
            <img src={img.startsWith('http') ? img : `/media/Clients/${img}`} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
            <button onClick={() => onDelete(img)} style={{ position: 'absolute', top: '5px', right: '5px', background: 'rgba(255,0,0,0.8)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '2px 6px' }}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function VideoManager({ videos, onAdd }: { videos: string[], onAdd: (vid: string) => void }) {
  const [newVid, setNewVid] = useState('');
  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>Video Content</h2>
      <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '2px dashed var(--glass-border)', borderRadius: '12px' }}>
        <input 
          placeholder="Video File Name (e.g., demo.mp4)" 
          value={newVid}
          onChange={(e) => setNewVid(e.target.value)}
          style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)', marginBottom: '1rem' }}
        />
        <button onClick={() => { onAdd(newVid); setNewVid(''); }} className="btn-primary">Add Video</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
        {videos.map((vid, idx) => (
          <div key={`admin-vid-${vid || 'empty'}-${idx}`} style={{ position: 'relative', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '10px', fontSize: '0.8rem' }}>
             <p title={vid || 'Untitled'} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 600 }}>{vid || 'Untitled Video'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EventsManager({ events, onAdd, onDelete }: { events: any[], onAdd: (ev: any) => void, onDelete: (id: string) => void }) {
  const [ev, setEv] = useState({ title: '', date: '', location: '', description: '' });
  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>Active Events</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', padding: '1.5rem', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
        <input placeholder="Event Heading" value={ev.title} onChange={e => setEv({...ev, title: e.target.value})} style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)' }} />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input type="date" value={ev.date} onChange={e => setEv({...ev, date: e.target.value})} style={{ flex: 1, padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)' }} />
          <input placeholder="Location" value={ev.location} onChange={e => setEv({...ev, location: e.target.value})} style={{ flex: 2, padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)' }} />
        </div>
        <textarea placeholder="Description" value={ev.description} onChange={e => setEv({...ev, description: e.target.value})} rows={3} style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)' }} />
        <button onClick={() => { onAdd(ev); setEv({ title: '', date: '', location: '', description: '' }); }} className="btn-primary" style={{ width: 'fit-content' }}>Publish Live Event</button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {events.map((e: any) => (
          <div key={e.id} className="glass" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>{e.title}</strong>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{e.date} | {e.location}</div>
            </div>
            <button onClick={() => onDelete(e.id)} style={{ color: 'red', background: 'none', border: '1px solid rgba(255,0,0,0.2)', padding: '5px 15px', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsManager({ currentPassword, onPasswordUpdate }: { currentPassword: string, onPasswordUpdate: (val: string) => void }) {
  const [passData, setPassData] = useState({ old: '', new: '', confirm: '' });

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (passData.old !== currentPassword) return alert("Current password incorrect!");
    if (passData.new !== passData.confirm) return alert("New passwords don't match!");
    if (passData.new.length < 6) return alert("Password must be at least 6 characters!");
    
    onPasswordUpdate(passData.new);
    setPassData({ old: '', new: '', confirm: '' });
    alert("Password updated successfully!");
  };

  return (
    <div style={{ maxWidth: '500px' }}>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Security Settings</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Update your administrator access credentials here.</p>
      
      <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Current Password</label>
          <input type="password" value={passData.old} onChange={(e) => setPassData({...passData, old: e.target.value})} style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)' }} required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>New Password</label>
          <input type="password" value={passData.new} onChange={(e) => setPassData({...passData, new: e.target.value})} style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)' }} required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Confirm New Password</label>
          <input type="password" value={passData.confirm} onChange={(e) => setPassData({...passData, confirm: e.target.value})} style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--background)' }} required />
        </div>
        <button type="submit" className="btn-primary" style={{ width: 'fit-content', marginTop: '1rem', padding: '0.8rem 2rem' }}>Update Password</button>
      </form>
    </div>
  );
}
