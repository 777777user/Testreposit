import http.server
import socketserver
import socket

PORT = 8000

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # не обязательно реально подключаться
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = "127.0.0.1"
    finally:
        s.close()
    return ip

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    local_ip = get_local_ip()
    print("✅ Сервер запущен")
    print(f"💻 ПК:     http://localhost:{PORT}")
    print(f"📱 Телефон: http://{local_ip}:{PORT}")
    print("⛔ Для остановки нажми Ctrl + C")
    httpd.serve_forever()
            