import React from "react";
import BoxComponent from "./Box";
import FlexComponent from "./Flex";
import GridComponent from "./Grid";


export default {
    title: "Components/Primitives",
    component: BoxComponent,
    argsTypes: {},
};

export const Box: React.FC = () => {
    return (
        <div>
            <BoxComponent style={{backgroundColor: "#1fc7d4", width: "300px", height: "300px" }} />
        </div>
    )
}

export const Flex: React.FC = () => {
    return (
      <div>
        <FlexComponent justifyContent="space-between" mt="40px">
            <BoxComponent style={{backgroundColor: "#1fc7d4", padding: "5px" }}><span>Left</span></BoxComponent>
            <BoxComponent><span>Right</span></BoxComponent>
        </FlexComponent>
        <FlexComponent justifyContent="center" mt="8px">
          <span>center</span>
        </FlexComponent>
      </div>
    );
  };
  
export const Grid: React.FC = () => {
    return (
      <GridComponent
        justifyItems="center"
        alignContent="center"
        gridTemplateColumns="1fr 1fr"
        gridColumnGap="16px"
        style={{ backgroundColor: "#7645D9" }}
      >
        <BoxComponent style={{ backgroundColor: "#1fc7d4", width: "300px", height: "300px" }} />
        <BoxComponent style={{ backgroundColor: "#1fc7d4", width: "300px", height: "300px" }} />
      </GridComponent>
    );
};