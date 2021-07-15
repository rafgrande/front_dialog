import React from 'react';

import { Container, Image, InfoContainer, Info, InfoAttr, InfoData} from './styles'
const CardProfile: React.FC = () => (
    <Container>
        < Image src="https://i.pravatar.cc/200?u=5f1d7f3e5dc58af42fc39242"/>
        <InfoContainer>
            <Info>
                <InfoAttr>
                    Name:
                </InfoAttr>
                <InfoData>
                    Dotson Jennings
                </InfoData>
            </Info>
            <Info>
                <InfoAttr>
                    Age:
                </InfoAttr>
                <InfoData>
                    36
                </InfoData>
            </Info>
            <Info>
                <InfoAttr>
                    EyeColor:
                </InfoAttr>
                <InfoData>
                    Bar
                </InfoData>
            </Info>
            <Info>
                <InfoAttr>
                    Company:
                </InfoAttr>
                <InfoData>
                    Foo
                </InfoData>
            </Info>
            <Info>
                <InfoAttr>
                    Email:
                </InfoAttr>
                <InfoData>
                    foobar@foo.com
                </InfoData>
            </Info>
        </InfoContainer>
    </Container>
)

export default CardProfile;