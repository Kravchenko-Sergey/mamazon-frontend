import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'User Store Name' },
			{ id: 2, name: 'User Store Name' }
		]
		this._brands = [
			{ id: 1, name: 'User Store Name' },
			{ id: 2, name: 'User Store Name' }
		]
		this._devices = [
			{ id: 1, name: 'User Store Name' },
			{ id: 2, name: 'User Store Name' }
		]
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

	get types() {
		return this._types
	}

	get brands() {
		return this._brands
	}

	get devices() {
		return this._devices
	}
}
