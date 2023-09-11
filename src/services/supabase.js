import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lbdqarignbrojneuxgxx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiZHFhcmlnbmJyb2puZXV4Z3h4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NDM1MzAsImV4cCI6MjAwOTQxOTUzMH0.STpDsUQ-Jj35M4T2jlamqbgnwVoj6ny3Vvx7dIIvu8Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
