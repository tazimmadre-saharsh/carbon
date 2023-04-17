import { S3Client } from '@aws-sdk/client-s3';
import multer from 'multer';
import multerS3 from 'multer-s3';

const S3_BUCKET_NAME = 'reinvent-image-bucket';

const s3 = new S3Client({
  region: 'ap-northeast-1',
  credentials: {
    accessKeyId:  'AKIAR3PXSIPWJKTT3BI3',
    secretAccessKey: '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',
  },
});

const multerS3Config = multerS3({
  s3: s3,
  bucket: S3_BUCKET_NAME,
  acl: 'public-read',
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, `${new Date().toISOString()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: multerS3Config,
});

export default upload;