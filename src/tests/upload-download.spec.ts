import { test, expect } from '@playwright/test';
import { UploadDownloadPage } from '../pages/uploadDownloadPage';
import * as path from 'path';
import * as fs from 'fs';
import { filePaths } from '../utils/filePath';

test.describe('Upload and Download', () => {
  test('Should upload and then download a file', async ({ page }) => {
    const uploadDownload = new UploadDownloadPage(page);
    await uploadDownload.navigate();

    const uploadsDir = path.join(process.cwd(), filePaths.uploads);
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    const uploadFilePath = path.join(uploadsDir, 'file.txt');

    if (!fs.existsSync(uploadFilePath)) {
      fs.writeFileSync(uploadFilePath, 'Sample text content for upload test');
    }

    await uploadDownload.uploadFile(uploadFilePath);

    const download = await uploadDownload.downloadFile();
    const downloadsDir = path.join(process.cwd(), filePaths.downloads);
    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir, { recursive: true });
    }
    const downloadFilePath = path.join(downloadsDir, download.suggestedFilename());

    await download.saveAs(downloadFilePath);
    expect(fs.existsSync(downloadFilePath)).toBeTruthy();
  });
});
