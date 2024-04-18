export interface Room {
	id: number;
	roomId: number;
	roomName: string;
	seoTitle: string;
	roomTypeName: string;
	roomTypeEnName: any;
	roomTypeId: number;
	area: number;
	floor: string;
	floorName: any;
	hostName: any;
	hostPhoneNumber: any;
	boxCodes: any[];
	tagCodes: string[];
	stateEnName: any;
	stateFaName: string;
	stateCode: string;
	cityEnName: any;
	cityFaName: string;
	cityCode: string;
	rate: number;
	personCapacity: number;
	extraPersonCapacity: number;
	bedRoom: number;
	bedCount: number;
	hasDiscount: boolean;
	basePrice: number;
	averagePrice: number;
	afterDiscount: number;
	afterDiscountAverage: number;
	totalPrice: number;
	extraPersonCount: number;
	totalNights: number;
	totalDiscountValue: number;
	longitude: number;
	latitude: number;
	address: any;
	roomMainMediaTitle: any;
	isInstantBook: boolean;
	isPrimeRoom: boolean;
	isNew: boolean;
	commentsCount: number;
	includeAroundLocations: any;
	sourceType: string;
	ruleIds: string[];
	improvementPriorityScore: number;
	minPricePriorityScore: number;
	maxPricePriorityScore: number;
	decreaseScoreForBlockReason: number;
	decreaseScoreForNotInstantReason: number;
	afterInstantScore: number;
	ctoPoint: number;
	isActive: boolean;
	beforeInstantScore: number;
	minNights: number;
	maxNights: number;
	currencyId: number;
	roomDiscounts: any[];
	roomMedia: RoomMedia;
	roomMediaTitles: RoomMediaTitles;
}

export interface RoomMedia {
	id: number;
	mainImageId: number;
	galleryImagesId: number[];
}

export interface RoomMediaTitles {
	mainImageTitle: string;
	galleryImagesTitles: string[];
	ownerTypeImagesTitles: any[];
}

interface RoomsSearchQuery {
	cityName?: string;
	includeAroundLocations?: boolean;
	top?: number;
	skip?: number;
	count?: boolean;
};

interface RoomsSearchResponse {
	'@odata.context': string;
	id: number;
	count: number;
	minPrice: number;
	rooms: Room[];
};

export type RoomsSearch = (
	query?: RoomsSearchQuery
) => Promise<RoomsSearchResponse>;
