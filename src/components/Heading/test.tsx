import { renderWithThem } from "utils/test-utils";
import { screen } from "@testing-library/react";
import Heading from ".";


describe('<Heading />', () => {
 

  it('should render a black heading when color is passed', () => {
    renderWithThem(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithThem(<Heading lineLeft>Won Games</Heading>)
  
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithThem(<Heading lineBootom>Won Games</Heading>)
   
  })

  it('should render a heading with a small size', () => {
    renderWithThem(<Heading size="small">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })


  })

  it('should render a heading with a huge size', () => {
    renderWithThem(<Heading size="huge">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a Heading with a primary line color', () => {
    renderWithThem(
      <Heading lineColor="primary" lineLeft lineBootom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
  
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithThem(
      <Heading lineColor="secondary" lineLeft lineBootom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
   
  })
})
