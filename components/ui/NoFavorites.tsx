import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container
    css={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "calc(100vh - 100px)",
    }}
  >
    <Text h1>No hay favoritos</Text>
    <Image
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7577aef0-c410-45ff-9399-228d00722478/deyecan-46fb675c-3dd5-4117-a408-97438ed71ba2.png/v1/fit/w_828,h_940/sad_pikachu_by_vexous_deyecan-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1MyIsInBhdGgiOiJcL2ZcLzc1NzdhZWYwLWM0MTAtNDVmZi05Mzk5LTIyOGQwMDcyMjQ3OFwvZGV5ZWNhbi00NmZiNjc1Yy0zZGQ1LTQxMTctYTQwOC05NzQzOGVkNzFiYTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.73MNUjMoLN95TV35EBqPaKHhRP_Z-aS98iwsbhRAZSo"
      alt="Sad Pikachu"
      width={250}
      height={250}
      css={{opacity: 0.5}}
    />
  </Container>
  )
}
