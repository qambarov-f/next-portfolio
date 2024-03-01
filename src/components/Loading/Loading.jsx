"use client";
   
import LoadingStyle from "../../styles/loading.module.scss";

function Loading({loadingMessage}) {
 
  return (
    <div className={LoadingStyle.loadingWrapper} id="loadingWrapper">
      <div className={LoadingStyle.loadingInner}>
        <h2 id="pageLoadingText">{loadingMessage}</h2>
        <div
          className={LoadingStyle.circleWrapper}
          id="loading_circle__wrapper"
        ></div>
      </div>
    </div>
  );
}

export default Loading;
