local gui = Instance.new("ScreenGui")
gui.Name = "CONSOLEMENU"
gui.Parent = game.CoreGui

-- Create Main Frame
local consoleFrame = Instance.new("Frame")
consoleFrame.Size = UDim2.new(0, 400, 0, 300)
consoleFrame.Position = UDim2.new(0.5, -200, 0.5, -150)
consoleFrame.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
consoleFrame.Parent = gui
consoleFrame.Draggable = true

local consoleCorner = Instance.new("UICorner")
consoleCorner.CornerRadius = UDim.new(0, 8)
consoleCorner.Parent = consoleFrame

-- Tab Bar (Switch between Console & Player Controls)
local tabBar = Instance.new("Frame")
tabBar.Size = UDim2.new(1, 0, 0.1, 0)
tabBar.Position = UDim2.new(0, 0, 0, 0)
tabBar.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
tabBar.Parent = consoleFrame

-- Console Tab Button
local consoleTabButton = Instance.new("TextButton")
consoleTabButton.Size = UDim2.new(0.5, 0, 1, 0)
consoleTabButton.Text = "Console"
consoleTabButton.Font = Enum.Font.GothamBold
consoleTabButton.TextSize = 16
consoleTabButton.BackgroundColor3 = Color3.fromRGB(50, 50, 50)
consoleTabButton.TextColor3 = Color3.fromRGB(255, 255, 255)
consoleTabButton.Parent = tabBar

-- Player Tab Button
local playerTabButton = Instance.new("TextButton")
playerTabButton.Size = UDim2.new(0.5, 0, 1, 0)
playerTabButton.Position = UDim2.new(0.5, 0, 0, 0)
playerTabButton.Text = "Player"
playerTabButton.Font = Enum.Font.GothamBold
playerTabButton.TextSize = 16
playerTabButton.BackgroundColor3 = Color3.fromRGB(50, 50, 50)
playerTabButton.TextColor3 = Color3.fromRGB(255, 255, 255)
playerTabButton.Parent = tabBar

-- Console Tab (Frame)
local consoleTab = Instance.new("Frame")
consoleTab.Size = UDim2.new(1, 0, 0.9, 0)
consoleTab.Position = UDim2.new(0, 0, 0.1, 0)
consoleTab.BackgroundColor3 = Color3.fromRGB(25, 25, 25)
consoleTab.Parent = consoleFrame

-- Console Output
local consoleOutput = Instance.new("TextLabel")
consoleOutput.Size = UDim2.new(1, 0, 0.7, 0)
consoleOutput.Position = UDim2.new(0, 0, 0, 0)
consoleOutput.Text = "Console Output:\nWaiting for input..."
consoleOutput.Font = Enum.Font.Gotham
consoleOutput.TextSize = 14
consoleOutput.TextColor3 = Color3.fromRGB(255, 255, 255)
consoleOutput.BackgroundColor3 = Color3.fromRGB(40, 40, 40)
consoleOutput.TextWrapped = true
consoleOutput.TextYAlignment = Enum.TextYAlignment.Top
consoleOutput.Parent = consoleTab

-- Console Input
local consoleInput = Instance.new("TextBox")
consoleInput.Size = UDim2.new(1, 0, 0.2, 0)
consoleInput.Position = UDim2.new(0, 0, 0.8, 0)
consoleInput.Text = ""
consoleInput.Font = Enum.Font.Gotham
consoleInput.TextSize = 14
consoleInput.TextColor3 = Color3.fromRGB(255, 255, 255)
consoleInput.BackgroundColor3 = Color3.fromRGB(40, 40, 40)
consoleInput.PlaceholderText = "Enter Command..."
consoleInput.Parent = consoleTab

-- Player Tab (Frame)
local playerTab = Instance.new("Frame")
playerTab.Size = UDim2.new(1, 0, 0.9, 0)
playerTab.Position = UDim2.new(0, 0, 0.1, 0)
playerTab.BackgroundColor3 = Color3.fromRGB(25, 25, 25)
playerTab.Parent = consoleFrame
playerTab.Visible = false  -- Hidden by default

-- Fly Button
local flyButton = Instance.new("TextButton")
flyButton.Size = UDim2.new(0.3, 0, 0.2, 0)
flyButton.Position = UDim2.new(0.05, 0, 0.2, 0)
flyButton.Text = "Fly"
flyButton.Font = Enum.Font.GothamBold
flyButton.TextSize = 14
flyButton.BackgroundColor3 = Color3.fromRGB(50, 150, 250)
flyButton.TextColor3 = Color3.fromRGB(255, 255, 255)
flyButton.Parent = playerTab

-- Godmode Button
local godButton = Instance.new("TextButton")
godButton.Size = UDim2.new(0.3, 0, 0.2, 0)
godButton.Position = UDim2.new(0.4, 0, 0.2, 0)
godButton.Text = "Godmode"
godButton.Font = Enum.Font.GothamBold
godButton.TextSize = 14
godButton.BackgroundColor3 = Color3.fromRGB(250, 50, 50)
godButton.TextColor3 = Color3.fromRGB(255, 255, 255)
godButton.Parent = playerTab

-- WalkSpeed Slider
local walkSpeedLabel = Instance.new("TextLabel")
walkSpeedLabel.Size = UDim2.new(0.3, 0, 0.2, 0)
walkSpeedLabel.Position = UDim2.new(0.75, 0, 0.2, 0)
walkSpeedLabel.Text = "WalkSpeed: 16"
walkSpeedLabel.Font = Enum.Font.GothamBold
walkSpeedLabel.TextSize = 14
walkSpeedLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
walkSpeedLabel.BackgroundTransparency = 1
walkSpeedLabel.Parent = playerTab

local walkSpeedSlider = Instance.new("TextBox")
walkSpeedSlider.Size = UDim2.new(0.3, 0, 0.2, 0)
walkSpeedSlider.Position = UDim2.new(0.75, 0, 0.4, 0)
walkSpeedSlider.Text = "16"
walkSpeedSlider.Font = Enum.Font.Gotham
walkSpeedSlider.TextSize = 14
walkSpeedSlider.TextColor3 = Color3.fromRGB(255, 255, 255)
walkSpeedSlider.BackgroundColor3 = Color3.fromRGB(40, 40, 40)
walkSpeedSlider.Parent = playerTab

-- Toggle Tabs
consoleTabButton.MouseButton1Click:Connect(function()
    consoleTab.Visible = true
    playerTab.Visible = false
end)

playerTabButton.MouseButton1Click:Connect(function()
    consoleTab.Visible = false
    playerTab.Visible = true
end)
