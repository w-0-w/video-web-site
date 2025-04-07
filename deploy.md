# Deploy

```bash
# 目录
cd /root/web-root/video-web-site/

# Nginx test & reload
cd /usr/local/nginx/sbin
# nginx 全局命令配置了之后，直接使用 nginx 就行
./nginx # 启动
./nginx -t # 检查
./nginx -s reload # 重启
./nginx -s stop # 停止

# Nginx edit
cd /usr/local/nginx/conf
vi nginx.conf
cd /usr/local/nginx/conf && vi nginx.conf

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/5ma.org/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/5ma.org/privkey.pem
This certificate expires on 2025-07-05.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

# /usr/local/website_ssl/fullchain.pem
# /usr/local/website_ssl/www.5ma.org.key

# Nginx log
cd /usr/local/nginx/logs && tail -f error.log
```