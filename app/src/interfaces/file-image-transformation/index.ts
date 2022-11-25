import { defineInterface } from '@directus/shared/utils';
import InterfaceFileImage from './file-image-transformation.vue';
import PreviewSVG from './preview.svg?raw';

export default defineInterface({
	id: 'file-image-transformation',
	name: '$t:interfaces.file-image-transformation.image',
	description: '$t:interfaces.file-image-transformation.description',
	icon: 'insert_photo',
	component: InterfaceFileImage,
	types: ['uuid'],
	localTypes: ['image_transformations'],
	group: 'relational',
	relational: true,
	options: [
		{
			field: 'folder',
			name: '$t:interfaces.system-folder.folder',
			type: 'uuid',
			meta: {
				width: 'half',
				interface: 'system-folder',
				note: '$t:interfaces.system-folder.field_hint',
			},
			schema: {
				default_value: undefined,
			},
		},
		{
			field: 'crop',
			name: '$t:interfaces.file-image-transformation.crop',
			type: 'boolean',
			meta: {
				width: 'half',
				interface: 'boolean',
				options: {
					label: '$t:interfaces.file-image-transformation.crop_label',
				},
			},
			schema: {
				default_value: true,
			},
		},
	],
	recommendedDisplays: ['image'],
	preview: PreviewSVG,
});
