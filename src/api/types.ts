
// API Objects

export type UserAPIObject = {
    userId: number;
    roleId: number;
    documentTypeId: number;
    document: string;
    psk: string;
    enabled: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    authorities: string[]; // Assuming it's an array of strings, adjust as needed
    username: string;
    password: string;
    name: string;
    plastName: string;
    mlastName: string;
    phoneNumber: string;
    gender: GenderDTO;
};
  
export type EditorialAPIObject = {
    id: number;
    name: string;
};

export type TextTypeAPIObject = {
    typeId: number;
    typename: string;
};

export type TextAPIObject = {
    id: number;
    title: string;
    publicationDate: Date,
    pages: number,
    edition: number,
    volume: number,
    editorial: EditorialAPIObject,
    type: TextTypeAPIObject,
    authors: AuthorAPIObject[];
};

export type AuthorAPIObject = {
    id: number;
    name: string;
    pseudoName: string;
    plastName: string;
    mlastName: string;
}

export type StatusAPIObject = {
    id: number;
    statusName: string;
    isActive: boolean;
}

export type CountryAPIObject = {
    id: number;
    countryName: string;
}

export type RegionAPIObject = {
    id: number;
    country: CountryAPIObject;
    regionName: string;
}

export type ProvinceAPIObject = {
    id: number;
    region: RegionAPIObject;
    provinceName: string;
}

export type DistrictAPIObject = {
    id: number;
    province: ProvinceAPIObject;
    districtName: string;
}

export type AddressAPIObject = {
    id: number;
    district: DistrictAPIObject;
    address: string;
}

export type CarnetAPIObject = {
    id: number;
    status: StatusAPIObject;
    code: string;
    carnetIssuanceDate: Date;
    carnetExpirationDate: Date;
}

export type EducationAPIObject = {
    id: number;
    educationName: string;
}

export type CustomerAPIObject = {
    id: number;
    user: UserAPIObject;
    address: AddressAPIObject;
    email: string;
    carnet: CarnetAPIObject;
    education: EducationAPIObject;
}

// DTO

export type GenderDTO = {
    id: number;
    genderName: string;
};

export type TextDTO = {
    title: string;
    publicationDate: Date,
    numPages: number,
    edition: number,
    volume: number,
    editorialId: number,
    typeId: number,
    authors: number[];
};

export type UserLogin = {
    document: string;
    psk: string;
};
  
export type UserLoginResponse = {
    token: string;
    expiration: number;
}
  


  
