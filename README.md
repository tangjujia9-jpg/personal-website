# tangjujia.me personal website

汤举嘉个人网站首版。当前是一个 Vite + React 静态站点，内容来自本机 `学习` 与 `导` 目录中的项目、开题、论文和仿真资料草稿。

## 本地开发

```bash
npm install
npm run dev
```

访问：

```text
http://127.0.0.1:5173
```

## 修改内容

主要文案集中在：

```text
src/content.ts
```

研究图放在：

```text
public/assets/
```

## 构建发布

```bash
npm run build
```

构建产物在：

```text
dist/
```

## 服务器部署建议

1. 在服务器创建静态目录：

```bash
sudo mkdir -p /var/www/tangjujia.me/html
```

2. 上传 `dist/` 内所有文件到 `/var/www/tangjujia.me/html`。

3. 复制或参考 `deploy/nginx-personal-website.conf`，放到 Nginx 配置目录中。

4. 检查并重载 Nginx：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

5. 域名解析中，将 `tangjujia.me` 的 A 记录指向服务器 `47.93.202.24`。如需 HTTPS，可以在服务器上使用 Certbot 申请证书。
