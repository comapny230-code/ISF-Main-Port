const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processSpeakers() {
  const dir = path.join(__dirname, '../public/images/speakers');
  const backupDir = path.join(__dirname, '../public/images/speakers_backup');

  // 1. Chinmay Kumar Dash - Remove poster text at bottom AND remove "My Startup TV" logo at top-left
  console.log('1. Processing chinmay-kumar-dash...');
  {
    // Extract top 350 px
    const cropped = await sharp(path.join(backupDir, 'chinmay-kumar-dash.jpg'))
      .extract({ left: 0, top: 0, width: 399, height: 350 })
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { data, info } = cropped;
    // Cover the top-left logo (x: 0..72, y: 0..80) with surrounding golden yellow
    // Sample color from x: 100, y: 30
    const sampleIdx = (30 * info.width + 100) * info.channels;
    const r = data[sampleIdx];
    const g = data[sampleIdx + 1];
    const b = data[sampleIdx + 2];

    for (let y = 0; y < 85; y++) {
      for (let x = 0; x < 75; x++) {
        // smooth gradient or fill
        const idx = (y * info.width + x) * info.channels;
        data[idx] = r;
        data[idx + 1] = g;
        data[idx + 2] = b;
      }
    }

    await sharp(data, { raw: info })
      .resize(700, 700, { kernel: sharp.kernel.lanczos3, fit: 'cover', position: 'top' })
      .sharpen({ sigma: 1.2, m1: 1.0, m2: 2.0 })
      .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
      .toFile(path.join(dir, 'chinmay-kumar-dash.jpg'));
  }

  // 2. Vikrant Varshney - Remove circular crop artifacts and make seamless portrait
  console.log('2. Processing vikrant-varshney...');
  {
    const rawImg = await sharp(path.join(backupDir, 'vikrant-varshney.png'))
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { data, info } = rawImg;
    const bgR = 110, bgG = 105, bgB = 102;

    // Center of image is (250, 250), radius is approx 240
    const cx = 250, cy = 250, rLimit = 238;

    for (let y = 0; y < info.height; y++) {
      for (let x = 0; x < info.width; x++) {
        const idx = (y * info.width + x) * info.channels;
        const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
        const alpha = data[idx + 3];

        if (dist > rLimit || alpha < 200) {
          data[idx] = bgR;
          data[idx + 1] = bgG;
          data[idx + 2] = bgB;
          data[idx + 3] = 255;
        }
      }
    }

    await sharp(data, { raw: info })
      .resize(700, 700, { kernel: sharp.kernel.lanczos3, fit: 'cover' })
      .sharpen({ sigma: 1.1, m1: 1.0, m2: 1.8 })
      .png({ quality: 96 })
      .toFile(path.join(dir, 'vikrant-varshney.png'));
  }

  // 3. Seshadri Vangala - Remove white corner artifact and upscale
  console.log('3. Processing seshadri-vangala...');
  {
    const rawImg = await sharp(path.join(backupDir, 'seshadri-vangala.jpg'))
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { data, info } = rawImg;
    const orangeR = 255, orangeG = 142, orangeB = 6;

    for (let y = 0; y < info.height; y++) {
      for (let x = 0; x < info.width; x++) {
        const idx = (y * info.width + x) * info.channels;
        const cr = data[idx];
        const cg = data[idx + 1];
        const cb = data[idx + 2];

        // If pixel is near-white or light grey (the corner artifact)
        if (cr > 195 && cg > 195 && cb > 195) {
          data[idx] = orangeR;
          data[idx + 1] = orangeG;
          data[idx + 2] = orangeB;
        }
      }
    }

    await sharp(data, { raw: info })
      .resize(700, 700, { kernel: sharp.kernel.lanczos3, fit: 'cover' })
      .sharpen({ sigma: 1.5, m1: 1.2, m2: 2.2 })
      .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
      .toFile(path.join(dir, 'seshadri-vangala.jpg'));
  }

  // 4. Parvathi Vunnam - 248x248 low-res
  console.log('4. Processing parvathi-vunnam...');
  await sharp(path.join(backupDir, 'parvathi-vunnam.png'))
    .resize(700, 700, { kernel: sharp.kernel.lanczos3, fit: 'cover', position: 'top' })
    .sharpen({ sigma: 1.3, m1: 1.0, m2: 2.0 })
    .png({ quality: 96 })
    .toFile(path.join(dir, 'parvathi-vunnam.png'));

  // 5. Dr. Suresh Kumar - 300x300
  console.log('5. Processing dr-suresh-kumar...');
  await sharp(path.join(backupDir, 'dr-suresh-kumar.jpg'))
    .resize(700, 700, { kernel: sharp.kernel.lanczos3, fit: 'cover', position: 'top' })
    .sharpen({ sigma: 1.2, m1: 1.0, m2: 1.8 })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile(path.join(dir, 'dr-suresh-kumar.jpg'));

  // 6. Ram Kumar Varma - 300x300
  console.log('6. Processing ram-kumar-varma...');
  await sharp(path.join(backupDir, 'ram-kumar-varma.jpg'))
    .resize(700, 700, { kernel: sharp.kernel.lanczos3, fit: 'cover', position: 'top' })
    .sharpen({ sigma: 1.2, m1: 1.0, m2: 1.8 })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile(path.join(dir, 'ram-kumar-varma.jpg'));

  // 7. Gaurav Mathur - 300x300
  console.log('7. Processing gaurav-mathur...');
  await sharp(path.join(backupDir, 'gaurav-mathur.jpg'))
    .resize(700, 700, { kernel: sharp.kernel.lanczos3, fit: 'cover', position: 'top' })
    .sharpen({ sigma: 1.2, m1: 1.0, m2: 1.8 })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile(path.join(dir, 'gaurav-mathur.jpg'));

  // 8. Dr. Siva Mahesh Tangutooru - 450x450
  console.log('8. Processing dr-siva-mahesh-tangutooru...');
  await sharp(path.join(backupDir, 'dr-siva-mahesh-tangutooru.jpg'))
    .resize(700, 700, { kernel: sharp.kernel.lanczos3, fit: 'cover', position: 'top' })
    .sharpen({ sigma: 1.1, m1: 1.0, m2: 1.8 })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile(path.join(dir, 'dr-siva-mahesh-tangutooru.jpg'));

  // 9. Dr. JA Chowdary - 500x500
  console.log('9. Processing dr-ja-chowdary...');
  await sharp(path.join(backupDir, 'dr-ja-chowdary.jpg'))
    .resize(700, 700, { kernel: sharp.kernel.lanczos3, fit: 'cover', position: 'top' })
    .sharpen({ sigma: 1.1, m1: 1.0, m2: 1.8 })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile(path.join(dir, 'dr-ja-chowdary.jpg'));

  // 10. P. Siddharth Reddy - 1206x1244
  console.log('10. Processing p-siddharth-reddy...');
  await sharp(path.join(backupDir, 'p-siddharth-reddy.jpg'))
    .resize(800, 800, { kernel: sharp.kernel.lanczos3, fit: 'cover', position: 'top' })
    .sharpen({ sigma: 1.0 })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile(path.join(dir, 'p-siddharth-reddy.jpg'));

  console.log('All 10 speaker images cleaned, upscaled, and perfected!');
}

processSpeakers().catch(console.error);
