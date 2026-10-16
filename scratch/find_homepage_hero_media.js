const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'ersconstruction.com',
  path: '/',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
};

https.get(options, (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    fs.writeFileSync('scratch/homepage.html', html);
    console.log('Homepage HTML saved, length:', html.length);

    // Look for video tags
    const videos = [...html.matchAll(/<(?:video|source)[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
    console.log('Videos in tags:', videos);

    // Look for video links / mp4 / webm / youtube anywhere in html
    const mediaLinks = [...html.matchAll(/(https?:\/\/[^"'\s<>]+\.(?:mp4|webm|ogv))/gi)].map(m => m[1]);
    console.log('Direct video files:', [...new Set(mediaLinks)]);

    // Look for data-settings with video
    const dataSettings = [...html.matchAll(/data-settings=["']([^"']+)["']/gi)].map(m => m[1]);
    for (const ds of dataSettings) {
      if (ds.includes('video') || ds.includes('youtube') || ds.includes('background_video')) {
        console.log('Video data-setting:', ds.replace(/&quot;/g, '"'));
      }
    }

    // Look for background-image in first 2 sections
    const sections = [...html.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/gi)];
    console.log('Sections found:', sections.length);

    // Let's also look for post CSS links on homepage
    const postCss = [...html.matchAll(/href=["']([^"']*post-\d+\.css[^"']*)["']/gi)].map(m => m[1]);
    console.log('Homepage post CSS files:', postCss);
  });
}).on('error', console.error);
