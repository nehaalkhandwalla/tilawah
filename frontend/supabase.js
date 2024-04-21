import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://revslishtzmfngocxmvg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJldnNsaXNodHptZm5nb2N4bXZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyMzkxMzQsImV4cCI6MjAyNTgxNTEzNH0.aOOuBGqyY7rHqqjjGF7QxX948A5yRZkgEvZ_b4L0Y6w";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
