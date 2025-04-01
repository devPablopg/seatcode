import React from "react";
import NotFoundContainer, {
  InsideImage,
  NotFoundMessage,
  NotFoundButton,
} from "./styles/WrapperNotFoundPage";
import LocaleService from "infrastructure/i18n/LocaleService";
import { NotFoundTranslations } from "modules/notFound/infrastructure/i18n/typing";
import { NotFoundText } from "modules/notFound/infrastructure/i18n/NotFoundText";

const notFoundTranslations: NotFoundTranslations = {
  ...NotFoundText[LocaleService.getLanguage()],
};

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <div>
        <InsideImage
          src="src/assets/img/seat/inside.webp"
          alt="office inside"
          loading="lazy"
        />
        <h1>404</h1>
      </div>
      <NotFoundMessage>
        <h1>
          {notFoundTranslations.messageFirstPart}
          <br />
          {notFoundTranslations.messageSecondPart}
        </h1>
        <p>{notFoundTranslations.messageThirdPart}</p>
        <div>
          <NotFoundButton href="../">{notFoundTranslations.backHome}</NotFoundButton>
        </div>
      </NotFoundMessage>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
