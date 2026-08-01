import os
paths = [
    r'C:\Users\mario\source\repos\IMS-Backend\IMS.API\wwwroot\js\app.js',
    r'C:\Users\mario\source\repos\IMS-Backend\IMS.WebClient\js\app.js'
]
old = '*** ${state.token}'
new = '`Bearer ${state.token}'
for path in paths:
    if not os.path.exists(path):
        print(f'missing: {path}')
        continue
    with open(path, 'r', encoding='utf-8') as f:
        s = f.read()
    if old in s:
        s = s.replace(old, new)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(s)
        print(f'fixed: {path}')
    else:
        print(f'noop: {path}')
