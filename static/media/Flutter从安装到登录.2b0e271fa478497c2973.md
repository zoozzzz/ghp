Everything is a Widget
完全开源、免费，拥有宽松的开源协议

## 安装——IOS
1. Mac
https://flutter.cn/docs/get-started/install/macos


## 常见问题
1. 下载canvasKit报错
![IMAGE](quiver-image-url/77485541004BA5CD24E7F5D6CA494CC8.jpg =1135x127)
- 解决方法-使用国内镜像
```
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

2. 真机调试失败
![IMAGE](quiver-image-url/64AAC3A104157D0BB3012A243EAC3AE1.jpg =947x487)

- 在xcode中打开
```
cd ios & open Runner.xcodeproj
```
![IMAGE](quiver-image-url/D3FC6E93CCEAA9011071EB9895572705.jpg =1038x437)


## 编辑器
vscode
flutter、dart插件

## 构建模式
debug/release/profile

## 添加包
在pubspec.yaml文件中体现

执行 `flutter pub get` 会自动下载所有依赖包，并声称 ` pubspec.lock` 文件

paackage.json、package-lock.json

## 状态管理
![IMAGE](quiver-image-url/36C7757523FE4123B2DF45EBA34AEE92.jpg =1203x607)

## 开发者工具
1. dart tools 启动一个服务
2. flutter run 获取链接

## 语法严格
少了分号编译不过

## json-to-dart
https://javiercbk.github.io/json_to_dart/
![IMAGE](quiver-image-url/54C0985E0BCDC92F9B56934CB3CA1C69.jpg =1152x807)