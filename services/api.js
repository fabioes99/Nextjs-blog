import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://dmztdqlihfianiwrizcy.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtenRkcWxpaGZpYW5pd3JpemN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2NDk2NTQsImV4cCI6MjAwNDIyNTY1NH0.kYZm05sp5fY8Ya4r39SBWbHthAGgVxfXFE66LZX2Ptc",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtenRkcWxpaGZpYW5pd3JpemN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2NDk2NTQsImV4cCI6MjAwNDIyNTY1NH0.kYZm05sp5fY8Ya4r39SBWbHthAGgVxfXFE66LZX2Ptc"
    }
})