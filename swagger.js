export default {
  "swagger": "2.0",
  "info": {
    "description": "A fake API about artists.",
    "version": "0.1.0",
    "title": "ArtistsAPI"
  },
  "basePath": "/v1",
  "tags": [
    {
      "name": "artist"
    }
  ],
  "paths": {
    "/artists": {
      "get": {
        "summary": "Get all artists.",
        "tags": [
          "artist"
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "array"
            }
          }
        }
      }
    },
    "/artists/{id}": {
      "get": {
        "summary": "Get details about an artist.",
        "tags": [
          "artist"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "description": "Artist ID",
            "required": true,
            "type": "integer",
            "example": 42468
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "array"
            }
          },
          "404": {
            "description": "Artist not found"
          }
        }
      }
    }
  }
}