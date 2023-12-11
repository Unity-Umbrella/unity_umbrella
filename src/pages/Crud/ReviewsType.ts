export interface IReview{
    id: string;
    ratings: number,
    reviewsdesc: string;
    reviewdBy: string;
}

export enum PageEnumm{
    reviewList,
    viewReview,
    edithouse,
}