const iller = require('../index')

it('plaka 01 adana olmali', () => {
    expect(iller().get({ 'plaka': '01' }).isim).toBe('adana')
})

it('isim adana plaka 01 olmali', () => {
    expect(iller().get({ 'isim': 'adana'}).plaka).toBe('01')
})

it('seyhan adananın ilçesi olmalı', () => {
    expect(iller().get({ 'isim': 'adana'}).ilceler).toContain('seyhan')
})

it('81 il olmalı', () => {
    expect(iller().get()).toHaveLength(81)
})