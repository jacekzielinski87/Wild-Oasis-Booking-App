import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ggogfvibkxzrbiyrknpn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdnb2dmdmlia3h6cmJpeXJrbnBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NDgyNTgsImV4cCI6MjAyODQyNDI1OH0.kEoXR2-6xcHkRKCVOaRoAKfdnp2tRpI-TxK4FNt19WA';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
