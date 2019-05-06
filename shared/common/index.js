const { omit, pick } = require('lodash');

const generalOmition = ['chSessionId', 'position', 'createdAt', 'updatedAt'];

const groupByType = (data, field) =>
	data.reduce((acc, c) => {
		const type = c[field];
		acc[type] ? acc[type].push(c) : (acc[type] = [c]);
		return acc;
	}, {});

/**
 * Takes an object and returns an array
 * @param {*} object
 */
const objectToJson = object => {
	const jsonArr = [];
	Object.keys(object).map(key => {
		let obj = {};
		obj[key] = object[key];
		jsonArr.push(obj);
	});

	return jsonArr;
};

const shallowCopy = data => JSON.parse(JSON.stringify(data));

const getIdsArray = (data, key, fields = []) =>
	data
		.map(element => {
			let obj = {};

			if (fields.length) {
				obj = pick(element, fields);
			}
			obj.id = element[`${key}`];
			return obj;
		});

const picKValueFromArray = (data, key) => data.map(row => row[`${key}`]);


const copyFromParentToChild = (data, child, fields = []) => {
	const _data = shallowCopy(data)
		.map(row => {
			const newRow = shallowCopy(row);
			const targetKey = shallowCopy(newRow[`${child}`]);
			newRow[`${child}`] = { ...targetKey, ...pick(newRow, fields) };
			return newRow;
		});

	return _data;
};

const omitFromArray = (arr, omition = []) =>
	arr.map(element => omit(element, omition));

function filterObjectsOf(data, keys) {
	return data.filter(obj => {
		const row = pick(obj, keys);
		return Object.keys(row).some(k => row[k]);
	});
}

module.exports = {
	groupByType,
	shallowCopy,
	objectToJson,
	getIdsArray,
	generalOmition,
	omitFromArray,
	copyFromParentToChild,
	picKValueFromArray,
	filterObjectsOf
};
