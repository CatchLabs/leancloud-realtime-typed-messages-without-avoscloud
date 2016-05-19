export class FileStorage {
  constructor(id, url, metaData) {
    if(!url) {
      throw new Error('file must have url');
    }
    this.id = id;
    this._url = url;
    this._metaData = metaData;
    if(metaData) {
      this._name = metaData.name;
    }
  }
  url() {
    return this._url;
  }
  metaData(param) {
    return param ? this._metaData[param] : this._metaData;
  }
  name() {
    return this._name;
  }
}