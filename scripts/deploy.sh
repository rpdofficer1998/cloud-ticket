#!/bin/bash

set -e

cd ~/cloud-ticket

echo "=== Pull latest code ==="
git pull --ff-only origin main

echo "=== Build backend image ==="
docker compose -f docker/docker-compose.yml build backend

echo "=== Restart application ==="
docker compose -f docker/docker-compose.yml up -d

echo "=== Current containers ==="
docker compose -f docker/docker-compose.yml ps