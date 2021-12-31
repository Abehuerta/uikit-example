import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { scales, variants } from "./types";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {},
};

export const Default: React.FC = () => {
    return (
        <div>
            <Button key="md" variant="primary" scale="md" mr="8px">Primary MD</Button>
            <Button key="sm" variant="primary" scale="sm" mr="8px">Primary SM</Button>
            <Button key="xs" variant="primary" scale="xs" mr="8px">Primary xs</Button>
        </div>
    );
};