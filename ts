local gui = Instance.new("ScreenGui")
gui.Name = "CONSOLEMENU1"
gui.Parent = game.CoreGui

-- Create Console Frame
local consoleFrame = Instance.new("Frame")
consoleFrame.Size = UDim2.new(0, 400, 0, 300)
consoleFrame.Position = UDim2.new(0.5, -200, 0.5, -150)
consoleFrame.BackgroundColor3 = Color3.fromRGB(20, 20, 20)
consoleFrame.BorderSizePixel = 2
consoleFrame.Parent = gui
consoleFrame.Draggable = true

local consoleCorner = Instance.new("UICorner")
consoleCorner.CornerRadius = UDim.new(0, 8)
consoleCorner.Parent = consoleFrame

-- Console Title
local consoleTitle = Instance.new("TextLabel")
consoleTitle.Size = UDim2.new(1, 0, 0.1, 0)
consoleTitle.Text = "Console Menu"
consoleTitle.Font = Enum.Font.GothamBold
consoleTitle.TextSize = 18
consoleTitle.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
consoleTitle.TextColor3 = Color3.fromRGB(255, 255, 255)
consoleTitle.Parent = consoleFrame

-- Close Button
local closeButton = Instance.new("TextButton")
closeButton.Size = UDim2.new(0, 30, 0, 30)
closeButton.Position = UDim2.new(1, -35, 0, 5)
closeButton.Text = "X"
closeButton.Font = Enum.Font.GothamBold
closeButton.TextSize = 18
closeButton.BackgroundColor3 = Color3.fromRGB(200, 50, 50)
closeButton.TextColor3 = Color3.fromRGB(255, 255, 255)
closeButton.Parent = consoleFrame

closeButton.MouseButton1Click:Connect(function()
    gui:Destroy()
end)

-- Console Output
local consoleOutput = Instance.new("TextLabel")
consoleOutput.Size = UDim2.new(1, 0, 0.3, 0)
consoleOutput.Position = UDim2.new(0, 0, 0.1, 0)
consoleOutput.Text = "Console Output:\nWaiting for input..."
consoleOutput.Font = Enum.Font.Gotham
consoleOutput.TextSize = 14
consoleOutput.TextColor3 = Color3.fromRGB(255, 255, 255)
consoleOutput.BackgroundColor3 = Color3.fromRGB(40, 40, 40)
consoleOutput.TextWrapped = true
consoleOutput.TextYAlignment = Enum.TextYAlignment.Top
consoleOutput.Parent = consoleFrame

-- Console Input
local consoleInput = Instance.new("TextBox")
consoleInput.Size = UDim2.new(1, 0, 0.1, 0)
consoleInput.Position = UDim2.new(0, 0, 0.4, 0)
consoleInput.Text = ""
consoleInput.Font = Enum.Font.Gotham
consoleInput.TextSize = 14
consoleInput.TextColor3 = Color3.fromRGB(255, 255, 255)
consoleInput.BackgroundColor3 = Color3.fromRGB(40, 40, 40)
consoleInput.PlaceholderText = "Enter Command..."
consoleInput.Parent = consoleFrame

-- Player Tab
local playerTab = Instance.new("Frame")
playerTab.Size = UDim2.new(1, 0, 0.5, 0)
playerTab.Position = UDim2.new(0, 0, 0.5, 0)
playerTab.BackgroundColor3 = Color3.fromRGB(25, 25, 25)
playerTab.Parent = consoleFrame

local playerTabTitle = Instance.new("TextLabel")
playerTabTitle.Size = UDim2.new(1, 0, 0.2, 0)
playerTabTitle.Text = "Player Controls"
playerTabTitle.Font = Enum.Font.GothamBold
playerTabTitle.TextSize = 16
playerTabTitle.TextColor3 = Color3.fromRGB(255, 255, 255)
playerTabTitle.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
playerTabTitle.Parent = playerTab

-- Fly Button
local flyButton = Instance.new("TextButton")
flyButton.Size = UDim2.new(0.3, 0, 0.2, 0)
flyButton.Position = UDim2.new(0.05, 0, 0.3, 0)
flyButton.Text = "Fly"
flyButton.Font = Enum.Font.GothamBold
flyButton.TextSize = 14
flyButton.BackgroundColor3 = Color3.fromRGB(50, 150, 250)
flyButton.TextColor3 = Color3.fromRGB(255, 255, 255)
flyButton.Parent = playerTab

local isFlying = false
flyButton.MouseButton1Click:Connect(function()
    local player = game.Players.LocalPlayer
    local char = player.Character
    if char then
        isFlying = not isFlying
        if isFlying then
            local humanoid = char:FindFirstChildOfClass("Humanoid")
            if humanoid then
                humanoid.PlatformStand = true
            end
            char.PrimaryPart.Velocity = Vector3.new(0, 50, 0)
            flyButton.Text = "Unfly"
        else
            char.PrimaryPart.Velocity = Vector3.new(0, 0, 0)
            local humanoid = char:FindFirstChildOfClass("Humanoid")
            if humanoid then
                humanoid.PlatformStand = false
            end
            flyButton.Text = "Fly"
        end
    end
end)

-- Godmode Button
local godButton = Instance.new("TextButton")
godButton.Size = UDim2.new(0.3, 0, 0.2, 0)
godButton.Position = UDim2.new(0.4, 0, 0.3, 0)
godButton.Text = "Godmode"
godButton.Font = Enum.Font.GothamBold
godButton.TextSize = 14
godButton.BackgroundColor3 = Color3.fromRGB(250, 50, 50)
godButton.TextColor3 = Color3.fromRGB(255, 255, 255)
godButton.Parent = playerTab

godButton.MouseButton1Click:Connect(function()
    local player = game.Players.LocalPlayer
    local char = player.Character
    if char then
        local humanoid = char:FindFirstChildOfClass("Humanoid")
        if humanoid then
            humanoid.MaxHealth = math.huge
            humanoid.Health = math.huge
        end
    end
end)

-- WalkSpeed Slider
local walkSpeedLabel = Instance.new("TextLabel")
walkSpeedLabel.Size = UDim2.new(0.3, 0, 0.2, 0)
walkSpeedLabel.Position = UDim2.new(0.75, 0, 0.3, 0)
walkSpeedLabel.Text = "WalkSpeed: 16"
walkSpeedLabel.Font = Enum.Font.GothamBold
walkSpeedLabel.TextSize = 14
walkSpeedLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
walkSpeedLabel.BackgroundTransparency = 1
walkSpeedLabel.Parent = playerTab

local walkSpeedSlider = Instance.new("TextBox")
walkSpeedSlider.Size = UDim2.new(0.3, 0, 0.2, 0)
walkSpeedSlider.Position = UDim2.new(0.75, 0, 0.5, 0)
walkSpeedSlider.Text = "16"
walkSpeedSlider.Font = Enum.Font.Gotham
walkSpeedSlider.TextSize = 14
walkSpeedSlider.TextColor3 = Color3.fromRGB(255, 255, 255)
walkSpeedSlider.BackgroundColor3 = Color3.fromRGB(40, 40, 40)
walkSpeedSlider.Parent = playerTab

walkSpeedSlider.FocusLost:Connect(function(enterPressed)
    if enterPressed then
        local speed = tonumber(walkSpeedSlider.Text)
        if speed then
            local player = game.Players.LocalPlayer
            local char = player.Character
            if char then
                local humanoid = char:FindFirstChildOfClass("Humanoid")
                if humanoid then
                    humanoid.WalkSpeed = speed
                    walkSpeedLabel.Text = "WalkSpeed: " .. speed
                end
            end
        end
    end
end)
