# web-services-project

## Projekt na przedmiot serwisy sieciowe

## Dostępne endpointy:
### produkt: /v1/api/product
* POST (zapis) - body: ProductDto
* PUT (edycja) - body: ProductDto
* GET (pobiera wszystkie)- body: puste
* DELETE (usuwa po id) - endpoint: /v1/api/product/{id}

### sklep: /v1/api/shop
* POST - body: ShopDto
* PUT (edycja) - body: ShopDto
* GET (pobiera wszystkie)- body: puste
* DELETE (usuwa po id) - endpoint: /v1/api/shop/{id}

### lista zakupów: /v1/api/list
* POST - body: ShoppingListDto
* PUT (edycja) - body: ShoppingListDto
* GET (pobiera wszystkie)- body: puste
* DELETE (usuwa po id) - endpoint: /v1/api/list/{id}


### ShopProductDto json schema

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "shopId": {
      "type": "number"
    },
    "productId": {
      "type": "number"
    },
    "price": {
      "type": "string"
    }
  }
}
```

### ShopIndustryDto json schema

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "industryId": {
      "type": "number"
    },
    "name": {
      "type": "string"
    }
  }
}
```

### ProductDto json schema

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "protein": {
      "type": "string"
    },
    "carbs": {
      "type": "string"
    },
    "fats": {
      "type": "string"
    },
    "calories": {
      "type": "string"
    },
    "size": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "shopProductDtoList": {
      "type": "array"
    }
  }
}
```

### ShopDto json schema

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "shopIndustryDtoList": {
      "type": "array"
    },
    "shopProductDtoList": {
      "type": "array"
    }
  }
}
```

### ShoppingListDto json schema

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "title": {
      "type": "string"
    },
    "note": {
      "type": "string"
    },
    "date": {
      "type": "number"
    },
    "productDtoList": {
      "type": "array"
    }
  }
}
```
