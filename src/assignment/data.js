

export enum QUESTION_TYPE {
    MULTIPLE_CHOICE,
    BOOLEAN,
    FILL_IN_BLACKS,
    MATCHING
}

export enum QUESTION_FORMAT {
    ONLY_TEXT,
    IMAGE,
    VIDEO
}

export const questionList = [
    {
        type: QUESTION_TYPE.MULTIPLE_CHOICE,
        format: QUESTION_FORMAT.ONLY_TEXT,
        text: 'What is your name?',
        imageUrl: null,
        videoUrl: null,
        solution: 'Solution is etc. . .  .. '
    },
    {
        type: QUESTION_TYPE.MULTIPLE_CHOICE,
        format: QUESTION_FORMAT.ONLY_TEXT,
        text: 'What is your name?',
        imageUrl: null,
        videoUrl: null,
        solution: 'Solution is etc. . .  .. '
    }
]