import pygame
import sys

# Initialize Pygame
pygame.init()

info = pygame.display.Info()

# Screen dimensions
screen_width, screen_height = info.current_w, info.current_h

# Margins and line settings
top_margin, bottom_margin = 50, 50
line_thickness = 1
staff_line_spacing = 10
num_staves = 9
lines_per_staff = 5
system_y_interval = 180

# Create the screen
screen = pygame.display.set_mode((screen_width, screen_height), pygame.FULLSCREEN)

# Main game loop
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Fill the screen with blackish
    screen.fill((10, 50, 100))

    # Update the display
    pygame.display.flip()

    # Control the frame rate
    pygame.time.Clock().tick(60)
