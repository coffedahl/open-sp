# kjell-delim
This is a project to create a tool for the Service Points at Kjell & Co that makes their lifes easier with their daily tasks.

## Features
- Tool for divideing up priceadjustments from airtable to correct lengths of strings for inventory list
- Removing of duplicates
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
    kjell_delim:
      build: .
      container_name: kjell_delim
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
docker build -t coffedahl/kjell-delim .
```
After the container is built you can run it trough:
```bash
docker run --name kjell-delim -p 3000:3000 coffedahl/kjell-delim
```
The program should now be avaliable trough *localhost:3000*
