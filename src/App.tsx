import { Container, Title, Text, Grid, Card, Image, Group, Box } from '@mantine/core'
import photo1 from './assets/images/photo1.JPG'
import photo2 from './assets/images/photo2.JPG'
import photo3 from './assets/images/photo3.JPG'
import photo4 from './assets/images/photo4.JPG'

function App() {
  const photos = [
    { id: 1, src: photo1, alt: 'Tugboat in Seattle Harbor' },
    { id: 2, src: photo2, alt: 'Tugboat at sunset' },
    { id: 3, src: photo3, alt: 'Tugboat in action' },
    { id: 4, src: photo4, alt: 'Tugboat portrait' },
  ]

  return (
    <>
      <Box bg="blue.6" c="white" p="md" style={{ borderBottom: '3px solid #1c7ed6' }}>
        <Container size="lg">
          <Group justify="space-between" align="center">
            <Title order={3} className="nav-title">Atuglife</Title>
            <Text size="sm">Tugboat Photography Time Capsule</Text>
          </Group>
        </Container>
      </Box>
      <Container size="lg" py="xl">
        <Title order={1} ta="center" mb="md" c="blue.7">
          Tugboat Photography Collection
        </Title>
        <Text ta="center" mb="xl" size="lg">
          Showcasing tugboat photography from my time as a vessel boarding agent at BR Anderson & Company in Seattle, Washington.
        </Text>
        <Grid justify="center">
          {photos.map((photo) => (
            <Grid.Col key={photo.id} span={{ base: 12, sm: 6, md: 6 }}>
              <Box display="flex" style={{ justifyContent: 'center' }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder className="photo-card" maw={400}>
                  <Card.Section>
                    <Image
                      src={photo.src}
                      height={300}
                      alt={photo.alt}
                      fit="cover"
                      radius="md"
                    />
                  </Card.Section>
                  <Text mt="md" ta="center" fw={500}>
                    {photo.alt}
                  </Text>
                </Card>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default App
