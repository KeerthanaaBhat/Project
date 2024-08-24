import socket
import os

def handle_client(client_socket):
    client_socket.send("220 Welcome to the FTP server\r\n".encode())
    while True:
        request = client_socket.recv(1024).decode()
        if not request:
            break
        print("Received:", request.strip())
        
        if request.startswith("USER"):
            client_socket.send("331 Password required\r\n".encode())
        elif request.startswith("PASS"):
            client_socket.send("230 Logged in\r\n".encode())
        elif request.startswith("LIST"):
            files = os.listdir('.')
            file_list = '\r\n'.join(files)
            client_socket.send(f"150 Here comes the directory listing\r\n{file_list}\r\n".encode())
            client_socket.send("226 Directory send OK\r\n".encode())
        elif request.startswith("RETR"):
            filename = request.split()[1]
            if os.path.exists(filename) and os.path.isfile(filename):
                with open(filename, 'rb') as file:
                    client_socket.send(f"150 Opening data connection for {filename}\r\n".encode())
                    client_socket.send(file.read())
                    client_socket.send("\r\n".encode())
                    client_socket.send("226 Transfer complete\r\n".encode())
            else:
                client_socket.send("550 File not found\r\n".encode())
        elif request.startswith("STOR"):
            filename = request.split()[1]
            client_socket.send(f"150 Opening data connection for {filename}\r\n".encode())
            data = client_socket.recv(1024)
            with open(filename, 'wb') as file:
                while data:
                    file.write(data)
                    data = client_socket.recv(1024)
            client_socket.send("226 Transfer complete\r\n".encode())
        elif request.startswith("QUIT"):
            client_socket.send("221 Goodbye\r\n".encode())
            break
        else:
            client_socket.send("500 Syntax error, command unrecognized\r\n".encode())
    client_socket.close()

def start_ftp_server():
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind(('localhost', 2121))  # Change the port number to 2121
    server_socket.listen(5)
    print("FTP server listening on port 2121...")
    while True:
        client_socket, addr = server_socket.accept()
        print("Accepted connection from", addr)
        handle_client(client_socket)

if __name__ == "__main__":
    start_ftp_server()



