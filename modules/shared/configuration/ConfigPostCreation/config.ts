/* eslint-disable */
export enum configPostCreation {
  maxUploadedFiles = 4,
  maxFileSizeInByte = 1024, // 10MB
  maxFileSizeInMegaByte = maxFileSizeInByte / 1024,
  maxOptionGroup = 4,
  maxOptions = 4,
  minOptions = 2,
}
export enum apiUrls {
  mediaAPI = 'https://pickify-media-be-dev.pickify.net/api/media/',
}
