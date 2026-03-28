"use client";
import React, { useState, useEffect } from 'react';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('admin123');
  const [activeMenu, setActiveMenu] = useState('gallery');
  const [db, setDb] = useState<{ gallery: string[], videos: string[], events: any[], donations?: any[], banners?: string[] }>({ gallery: [], videos: [], events: [], donations: [], banners: [] });

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
    let res;
    if (payload.file) {
      const formData = new FormData();
      formData.append('type', type);
      formData.append('file', payload.file);
      res = await fetch('/api/admin', {
        method: 'POST',
        body: formData,
      });
    } else {
      res = await fetch('/api/admin', {
        method: 'POST',
        body: JSON.stringify({ type, ...payload }),
        headers: { 'Content-Type': 'application/json' }
      });
    }
    const result = await res.json();
    if (result.success) {
      setDb(result.data);
    } else {
      alert(result.error || 'Failed to update data');
    }
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
                onClick={() => setActiveMenu('banners')} 
                className={activeMenu === 'banners' ? 'btn-primary' : 'btn-outline'}
                style={{ textAlign: 'left', border: activeMenu === 'banners' ? 'none' : '1px solid var(--glass-border)' }}
              >
                🏞️ Banners Manager
              </button>
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
              <button 
                onClick={() => setActiveMenu('donations')} 
                className={activeMenu === 'donations' ? 'btn-primary' : 'btn-outline'}
                style={{ textAlign: 'left', border: activeMenu === 'donations' ? 'none' : '1px solid var(--glass-border)', marginTop: '0.5rem' }}
              >
                💝 Donation Pledges
              </button>
              <hr style={{ margin: '1rem 0', opacity: 0.2 }} />
              <button onClick={handleLogout} className="btn-outline" style={{ color: 'red', borderColor: 'rgba(255,0,0,0.2)' }}>
                Logout
              </button>
            </nav>
          </div>

          {/* Main Area */}
          <div className="glass" style={{ flex: 1, padding: '2rem' }}>
            {activeMenu === 'banners' && <BannersManager images={db.banners || ["banner1.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg", "banner5.jpg", "banner6.jpg"]} onAdd={(file) => handleAddData('banner', { file })} onDelete={(img) => handleAddData('delete_banner', { image: img })} />}
            {activeMenu === 'gallery' && <GalleryManager images={db.gallery} onAdd={(file) => handleAddData('gallery', { file })} onDelete={(img) => handleAddData('delete_gallery', { image: img })} />}
            {activeMenu === 'videos' && <VideoManager videos={db.videos} onAdd={(file) => handleAddData('video', { file })} />}
            {activeMenu === 'events' && <EventsManager events={db.events} onAdd={(ev) => handleAddData('event', { event: ev })} onDelete={(id) => handleAddData('delete_event', { id })} />}
            {activeMenu === 'settings' && <SettingsManager currentPassword={currentPassword} onPasswordUpdate={setCurrentPassword} />}
            {activeMenu === 'donations' && <DonationsManager donations={db.donations || []} onDelete={(id) => handleAddData('delete_donation', { id })} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryManager({ images, onAdd, onDelete }: { images: string[], onAdd: (file: File) => void, onDelete: (img: string) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    await onAdd(file);
    setFile(null);
    setUploading(false);
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Images Gallery</h2>
      <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '2px dashed var(--glass-border)', borderRadius: '12px' }}>
        <input 
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <button 
          onClick={handleUpload} 
          className="btn-primary" 
          disabled={!file || uploading}
        >
          {uploading ? 'Uploading...' : 'Upload Image to Gallery'}
        </button>
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

function VideoManager({ videos, onAdd }: { videos: string[], onAdd: (file: File) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    await onAdd(file);
    setFile(null);
    setUploading(false);
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>Video Content</h2>
      <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '2px dashed var(--glass-border)', borderRadius: '12px' }}>
        <input 
          type="file"
          accept="video/mp4"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <button 
          onClick={handleUpload} 
          className="btn-primary" 
          disabled={!file || uploading}
        >
          {uploading ? 'Uploading...' : 'Upload Video'}
        </button>
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

function DonationsManager({ donations, onDelete }: { donations: any[], onDelete: (id: string) => void }) {
  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Donation Pledges & Form Submissions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {donations.length === 0 ? <p style={{ color: 'var(--text-muted)' }}>No donation submissions have been recorded yet.</p> : null}
        {donations.map((d: any) => (
          <div key={d.id} className="glass" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <strong style={{ fontSize: '1.3rem', color: 'var(--foreground)' }}>{d.name}</strong> 
              <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem' }}>({d.mobile} | {d.email})</span>
              <div style={{ marginTop: '0.8rem', marginBottom: '0.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                <span style={{ fontWeight: 600, color: 'var(--primary)' }}>Purpose:</span> {d.purpose} <br/>
                <span style={{ fontWeight: 600, color: 'var(--primary)' }}>Quantity:</span> {d.quantity} <br/>
                <span style={{ fontWeight: 600, color: 'var(--primary)' }}>PAN Card:</span> <span style={{ textTransform: 'uppercase' }}>{d.pan || 'Not Provided'}</span> <br/>
                <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Received On:</span> <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{new Date(d.date).toLocaleString()}</span>
              </div>
            </div>
            <button onClick={() => onDelete(d.id)} style={{ color: 'red', background: 'none', border: '1px solid rgba(255,0,0,0.3)', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.2s' }}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BannersManager({ images, onAdd, onDelete }: { images: string[], onAdd: (file: File) => void, onDelete: (img: string) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    await onAdd(file);
    setFile(null);
    setUploading(false);
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Homepage Banners Manager</h2>
      <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '2px dashed var(--glass-border)', borderRadius: '12px' }}>
        <input 
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <button 
          onClick={handleUpload} 
          className="btn-primary" 
          disabled={!file || uploading}
        >
          {uploading ? 'Uploading...' : 'Upload New Banner'}
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {images.map((img, idx) => (
          <div key={`admin-banner-${img}-${idx}`} style={{ position: 'relative' }}>
            <img src={img.startsWith('http') ? img : `/media/banner/${img}`} style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
            <button onClick={() => onDelete(img)} style={{ position: 'absolute', top: '5px', right: '5px', background: 'rgba(255,0,0,0.8)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '2px 6px' }}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}
