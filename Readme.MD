# illerimiz.js

İlleri JSON formatında veren bir kütüphane.

# Kurulum

```bash
npm install --save-dev illerimiz
```

# Kullanım

**Plakaya Göre**

```javascript
iller().get({ 'plaka': '01' })
```

**Şehir Adına Göre**

```javascript
iller().get({ 'isim': 'adana'})
```

**Şehrin İlçeleri**

```javascript
iller().get({ 'isim': 'adana'}).ilceler
```

**Tüm Şehirler**

```javascript
iller().get()
```

# Test

Testler **jest** ile çalışmakta

```bash
npm test
```