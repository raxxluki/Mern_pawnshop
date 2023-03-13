import {useEffect, useState} from "react";

const defaultTitle = "Pawn Shop";

const useDocumentTitle = (title) => {
    const [, setState] = useState(defaultTitle);

    useEffect(() => {
        let newTitle = defaultTitle;

        if (title) {
            newTitle += ` - ${title}`;
        }

        setState(newTitle);
    }, [title])

    return null;
}

export default useDocumentTitle;