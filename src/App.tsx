import { Container, Title, Text, Grid, Card, Image } from '@mantine/core'

function App() {
  // Placeholder for tugboat photos - replace with actual images
  const photos = [
    { id: 1, src: 'https://via.placeholder.com/400x300?text=Tugboat+1', alt: 'Tugboat in Seattle Harbor' },
    { id: 2, src: 'https://via.placeholder.com/400x300?text=Tugboat+2', alt: 'Tugboat at sunset' },
    { id: 3, src: 'https://via.placeholder.com/400x300?text=Tugboat+3', alt: 'Tugboat in action' },
    // Add more photos here
  ]

  return (
    <Container size="lg" py="xl">
      <Title order={1} ta="center" mb="md" c="blue.7">
        Atuglife - Tugboat Photography Time Capsule
      </Title>
      <Text ta="center" mb="xl" size="lg">
        Showcasing tugboat photography from my time as a vessel boarding agent at BR Anderson & Company in Seattle, Washington.
      </Text>
      <Grid>
        {photos.map((photo) => (
          <Grid.Col key={photo.id} span={{ base: 12, sm: 6, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src={photo.src}
                  height={200}
                  alt={photo.alt}
                  fallbackSrc="https://via.placeholder.com/300x200?text=Tugboat+Photo"
                />
              </Card.Section>
              <Text mt="md" ta="center">
                {photo.alt}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}

export default App
