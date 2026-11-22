// Service worker สำหรับให้ติดตั้งเป็นแอปได้ — ไม่เก็บแคชข้อมูลการจอง ทุกอย่างโหลดสดจากอินเทอร์เน็ตตามปกติ
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return; // คำขออื่นปล่อยให้เบราว์เซอร์จัดการตามปกติ
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<meta charset="utf-8"><p style="font-family:sans-serif;padding:24px">ไม่มีการเชื่อมต่ออินเทอร์เน็ต กรุณาลองใหม่อีกครั้ง</p>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
