# Deploy

```bash
# 目录
cd /root/web-root/video-web-site/

# Nginx test & reload
cd /usr/local/nginx/sbin
./nginx -t
./nginx -s reload
./nginx -s stop

# Nginx edit
cd /usr/local/nginx/conf
vi nginx.conf
/usr/local/website_ssl/fullchain.pem
/usr/local/website_ssl/www.5ma.org.key

# Nginx log
cd /usr/local/nginx/logs && tail -f error.log
```