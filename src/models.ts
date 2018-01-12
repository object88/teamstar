module Models {
	class Team {
		name: string;
		aliases?: string[];
		description?: string;
		emailList?: string;
		flow?: string;
		retired?: boolean;
		tags?: string[];

		constructor(name: string) {
			this.name = name;
		}
	}
}

export { Models }