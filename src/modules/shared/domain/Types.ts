export enum FontWeightType {
    BOLD = 'bold',
    NORMAL = 'normal'
}

export const INTRO = 'INTRO';

export interface Paragraph {
    key: string;
    font?: FontWeightType.BOLD | FontWeightType.NORMAL;
    text?: string;
}

export const SRC_IMAGES_PREFIX = '/src/assets/img/seat/'