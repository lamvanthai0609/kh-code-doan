export const folderCloudinary = (folder) => {
    switch (folder) {
        case 'search':
            return IMAGE_SEARCH;
        case 'movie':
            return IMAGE_MOVIE;
        case 'category':
            return IMAGE_CATEGORY;
        case 'training':
            return IMAGE_TRAINING;
        default:
            return '';
    }
}

export class ErrorApp extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        
    }
}