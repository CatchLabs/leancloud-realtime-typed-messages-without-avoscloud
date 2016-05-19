# leancloud-realtime-typed-messages-without-avoscloud

官方的富媒体消息组件leancloud-realtime-typed-messages 需要依赖 avoscloud-sdk，所以建立此 repo 取消此依赖，以减小体积并避免在前端使用 AppKey。

## 引入
```javascript
import { FileMessage, ImageMessage, AudioMessage, VideoMessage, LocationMessage, FileStorage } from 'leancloud-realtime-typed-messages-without-avoscloud';
```

## File
1. 收：
getFile 方法将返回一个自行简单封装的 AV.File 类，可以使用以下方法：
```javascript
let file = msg.getFile();
let id = file.id;
let url = file.url();
let name = file.name();
let width = file.metaData('width');
```
2. 发：
使用以下方法构造 Message：
```javascript
let file = new FileStorage(id, url, metaData);
let message = new ImageMessage(file);
conversation.send(message).then(...);
```

## Location
1. 收：
getLocation 方法将返回一个包含 latitude 和 longitude 两个属性的对象：
```javascript
let location = msg.getLocation();
let latitude = location.latitude;
let longitude = location.longitude;
```
2. 发：
使用以下方法构造 Message：
```javascript
let message = new LocationMessage({latitude, longitude});
conversation.send(message).then(...);
```