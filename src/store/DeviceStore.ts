import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'User Store Name' },
			{ id: 2, name: 'User Store Name' },
			{ id: 3, name: 'User Store Name' },
			{ id: 4, name: 'User Store Name' }
		]
		this._brands = [
			{ id: 1, name: 'User Store Name' },
			{ id: 2, name: 'User Store Name' }
		]
		this._devices = [
			{
				id: 1,
				name: 'User Store Name',
				price: 25000,
				img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyBkis5vqENCvb7a_D-kXV9f7x0KtTVTmlA&s'
			},
			{
				id: 2,
				name: 'User Store Name',
				price: 20000,
				img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyBkis5vqENCvb7a_D-kXV9f7x0KtTVTmlA&s'
			},
			{
				id: 3,
				name: 'User Store Name',
				price: 20000,
				img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyBkis5vqENCvb7a_D-kXV9f7x0KtTVTmlA&s'
			},
			{
				id: 4,
				name: 'User Store Name',
				price: 20000,
				img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyBkis5vqENCvb7a_D-kXV9f7x0KtTVTmlA&s'
			},
			{
				id: 5,
				name: 'User Store Name',
				price: 20000,
				img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyBkis5vqENCvb7a_D-kXV9f7x0KtTVTmlA&s'
			},
			{
				id: 6,
				name: 'User Store Name',
				price: 20000,
				img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyBkis5vqENCvb7a_D-kXV9f7x0KtTVTmlA&s'
			},
			{
				id: 7,
				name: 'User Store Name',
				price: 20000,
				img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyBkis5vqENCvb7a_D-kXV9f7x0KtTVTmlA&s'
			}
		]
		this._selectedType = {}
		makeAutoObservable(this)
	}

	setTypes(types) {
		this._types = types
	}

	setBrands(brands) {
		this._brands = brands
	}

	setDevices(services) {
		this._services = services
	}

	setSelectedType(type) {
		this._selectedType = type
	}

	get types() {
		return this._types
	}

	get brands() {
		return this._brands
	}

	get devices() {
		return this._devices
	}

	get selectedType() {
		return this._selectedType
	}
}
