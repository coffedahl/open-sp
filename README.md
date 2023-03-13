# Open-SP
This is a project to create a tool for the Service Points at Kjell & Co that makes their lifes easier with their daily tasks. The project is based on the expireices of sellers and how we can make things as efficent as possible with repetitive tasks. The project is alive and well.

## Features
- Tool for divideing up priceadjustments from airtable to correct lengths of strings for inventory list
- Removing of duplicates
- Shipment inventory, checking that shipments are correct
- Simple tutorial page

## Installation
### Requirements
- Docker
#### Optional
- Docker-Compose

### Build method (recomended)
Download and exctract the Zip-file from the latest release.

#### Docker-Compose
Create a *docker-compose.yml* in the folder and paste the contents down below
```yaml
version: "3.7"
  services:
    open-sp:
      build: .
      container_name: open-sp
      ports:
        - 3000:3000
```
Run the program trough
```bash
docker-compose up -d --force-recreate
```
The program should now be available trough *localhost:3000*
#### Docker
```bash
docker build -t coffedahl/open-sp .
```
After the container is built you can run it trough:
```bash
docker run --name kjell-delim -p 3000:3000 coffedahl/open-sp
```
The program should now be avaliable trough *localhost:3000*
