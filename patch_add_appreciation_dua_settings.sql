-- patch_add_appreciation_dua_settings.sql
-- คำสั่ง SQL สำหรับเพิ่มคอลัมน์เก็บข้อความชื่นชม/ดูอาอ์ที่แอดมินแก้ไขได้
-- กรุณารันใน Supabase SQL Editor ของโปรเจกต์ระบบเวร (wen) เท่านั้น

ALTER TABLE public.settings ADD COLUMN IF NOT EXISTS appreciation_dua_text text;
